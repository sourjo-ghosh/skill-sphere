import HomeContent from "@/components/HomeContent";

export default async function Home() {
  const baseUrl = process.env.BETTER_AUTH_URL || "";
  const res = await fetch(`${baseUrl}/data.json`);
  const data = await res.json();

  const featuredCoursesData = data
    .filter((course) => course.rating >= 4.5)
    .slice(0, 3);

  return <HomeContent featuredCoursesData={featuredCoursesData} />;
}
