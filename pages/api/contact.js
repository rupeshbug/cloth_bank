import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await addContact(req, res);
  } else if (req.method == "GET") {
    return await getContact(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function addContact(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.contact.create({
      data: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        phone: body.phone,
        weight: parseInt(body.weight),
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    return res
      .status(500)
      .json({ error: "Error saving the user information", success: false });
  }
}
