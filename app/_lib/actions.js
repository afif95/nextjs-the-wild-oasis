// server actions
"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import {
  getBookings,
  updateGuest2,
  updateBooking2,
  deleteBooking2,
  createBooking2,
} from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("You aren't logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Provide a valid NID");

  const updateData = { nationality, countryFlag, nationalID };

  await updateGuest2(session.user.guestId, updateData);

  // to revalidate the client side browser/router cache
  revalidatePath("/account/profile");
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You aren't logged in");

  // a lot of data in formData
  // Object.entries(formData.entries())

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  await createBooking2(newBooking);

  // to revalidate the client side browser/router cache
  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
}

export async function deleteBooking(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You aren't logged in");

  // protection
  // browser console > network > reservations > copy as cURL > paste in terminal > change id at the end > hit enter
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) throw new Error("Not allowed");

  await deleteBooking2(bookingId);

  // to revalidate the client side browser/router cache
  revalidatePath("/account/reservations");
}

export async function updateBooking(formData) {
  const bookingId = Number(formData.get("bookingId"));

  // authentication
  const session = await auth();
  if (!session) throw new Error("You aren't logged in");

  // authorization
  // protection
  // browser console > network > reservations > copy as cURL > paste in terminal > change id at the end > hit enter
  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingIds.includes(bookingId)) throw new Error("Not allowed");

  // building update data
  const updateData = {
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
  };

  // mutation
  await updateBooking2(bookingId, updateData);

  // revalidation
  revalidatePath(`/account/reservations/edit/${bookingId}`);
  revalidatePath("/account/reservations");

  // redirection
  redirect("/account/reservations");
}

export async function signInAction() {
  // in case of multiple providers, looping over the providers is a possible option
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
