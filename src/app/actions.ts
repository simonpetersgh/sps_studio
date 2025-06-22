"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    // Here you would typically initialize the Firebase Admin SDK
    // and save the data to a 'contact_messages' collection in Firestore.
    // e.g., await db.collection('contact_messages').add(parsed.data);

    console.log("Contact form submitted successfully:", parsed.data);

    // Simulate a short delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      error: { _errors: ["An unexpected error occurred. Please try again."] },
    };
  }
}
