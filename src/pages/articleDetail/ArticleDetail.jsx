import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPost from "./container/SuggestedPost";

const BreadCrumbsData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Article title",
    link: "/blog/1",
  },
];

const postData = [
  {
    _id: "1",
    image: images.Post1,
    title: "Lorem ipsum dolor sit amet.",
    createdAt: "06/11/2023",
  },
  {
    _id: "2",
    image: images.Post1,
    title: "Lorem ipsum dolor sit amet.",
    createdAt: "",
  },
  {
    _id: "3",
    image: images.Post1,
    title: "Lorem ipsum dolor sit amet.",
    createdAt: "",
  },
  {
    _id: "4",
    image: images.Post1,
    title: "Lorem ipsum dolor sit amet.",
    createdAt: "",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Medical",
  "Lifestyle",
  "Learn",
  "Medical",
];

const ArticleDetail = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <BreadCrumbs data={BreadCrumbsData}></BreadCrumbs>
          <img
            className="rounded-xl w-full"
            src={images.Post1}
            alt="laptop"
          ></img>
          <Link
            to="/blog?category=selectedCategory"
            className="text-dark-light text-sm font-roboto inline-block mt-4 md:text-base"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Lorem ipsum dolor sit amet.
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              sint veniam culpa, soluta reiciendis architecto vero quam neque
              obcaecati consequuntur perferendis tenetur assumenda reprehenderit
              placeat distinctio sapiente quo, numquam porro atque quas nulla.
              Dolorum voluptates eaque, impedit, quisquam asperiores explicabo
              placeat nihil velit quas error quaerat cupiditate sit, magni sed
              cumque culpa blanditiis porro quam consequatur iure saepe. Ea,
              consectetur placeat! Aut, deleniti omnis ea possimus totam tenetur
              voluptate inventore odit! Eos ea sunt, libero placeat corporis
              quidem debitis nam voluptate nisi iste unde repellendus quo dolore
              voluptatum quis nesciunt minima, delectus nulla reiciendis
              voluptatem quibusdam! Nam hic inventore porro?
            </p>
          </div>
          <SuggestedPost
            header="Latest Article"
            posts={postData}
            tags={tagsData}
            className="mt-8 lg:mt-0 lg:max-w-xs"
          ></SuggestedPost>
        </article>
      </section>
    </MainLayout>
  );
};

export default ArticleDetail;
