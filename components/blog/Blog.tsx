import BlogCard from "./BlogCard";

export default function Blog() {
  const BlogPosts = [
    {
      img: "https://yombu.com/wp-content/uploads/2023/12/Yombu-Events-Kids-Party-News-Slider-Square.jpg",
      title: "Party News",
      caption: "The latest kids party news and views",
    },
    {
      img: "https://yombu.com/wp-content/uploads/2022/11/Peacock-Garden-Resto-Bar-Grill-YOmbu-Outtdoor-Party-Venues-in-Miami.jpg",
      title: "Party Guides",
      caption: "The best party venues, shops and suppliers",
    },
    {
      img: "https://yombu.com/wp-content/uploads/2023/10/Kids-Party-Planning-in-New-York-Yombu.jpg",
      title: "Party Planning",
      caption: "All things kids party themes and planning.",
    },
    {
      img: "https://yombu.com/wp-content/uploads/2022/11/07-tiffany-and-co-cake-smash-set-custom-one-year-old-1st-birthday-teal-jewelry-shop-breakfast-at-tiffanys-audrey-hepburn-costume-baby-girl-frosting-buttercream-cake-design.png",
      title: "First Birthday",
      caption: "All you need to know about First Birthdays.",
    },
  ];
  return (
    <main className="flex flex-col md:mt-32 w-full md:w-[80%] mx-auto md:mb-20 mb-8">
      <div className="px-12 md:px-1">
        <h2 className="font-bold md:text-6xl text-4xl text-[#383838]">
          Party Blog
        </h2>
        <p className="font-light text-sm mt-2 text-[#383838]">
          Check out our{" "}
          <span className="font-medium text-base">Party Planning Blog</span>{" "}
          with all you need to know about kids parties.
        </p>
        <button className="bg-[#FFC3C3] px-12 py-3 rounded-full mt-4 text-[#FFF] w-full md:w-fit block md:hidden lg:block">
          THE BLOG
        </button>
      </div>

      <div className="mt-10 hidden md:block">
        <div className="flex flex-row gap-6 items-center justify-between w-full">
          <BlogCard
            image={BlogPosts[0].img}
            title={BlogPosts[0].title}
            caption={BlogPosts[0].caption}
          />
          <BlogCard
            image={BlogPosts[1].img}
            title={BlogPosts[1].title}
            caption={BlogPosts[1].caption}
          />
          <BlogCard
            image={BlogPosts[2].img}
            title={BlogPosts[2].title}
            caption={BlogPosts[2].caption}
          />
          <div className="hidden lg:block h-full">
            <BlogCard
              image={BlogPosts[3].img}
              title={BlogPosts[3].title}
              caption={BlogPosts[3].caption}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
