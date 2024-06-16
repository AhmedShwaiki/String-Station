import prisma from './prisma';

export async function fetchProducts() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await prisma.product.findMany();

    //   const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');

    return data;
  } catch (error) {
    throw new Error('Failed to fetch revenue data.');
  }
}
