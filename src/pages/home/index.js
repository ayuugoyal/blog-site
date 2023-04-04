import React from "react";
import Cards from "../../components/Cards";
import { Button } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import BoxCards from "../../components/BoxCards";

const blogData = [
  {
    blogImage:
      "https://images.freeimages.com/images/previews/8cf/family-moments-1430443.jpg",
    name: "Ayush Goyal",
    date: "27.12.2017",
    desc: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgırmetinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufatnumune kitabı...",
    blogLink: "https://google.com/",
  },
  {
    blogImage:
      "https://images.freeimages.com/images/previews/8cf/family-moments-1430443.jpg",
    name: "Ayush Goyal",
    date: "27.12.2017",
    desc: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgırmetinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufatnumune kitabı...",
    blogLink: "https://google.com/",
  },
  {
    blogImage:
      "https://images.freeimages.com/images/previews/8cf/family-moments-1430443.jpg",
    name: "Ayush Goyal",
    date: "27.12.2017",
    desc: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgırmetinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufatnumune kitabı...",
    blogLink: "https://google.com/",
  },
];

const blogManCardData = [
  {
    blogImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    blogTitle: "UI/UX Review Check",
    blogDesc:
      "Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.",
    blogDate: "10 Jan",
  },
  {
    blogImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    blogTitle: "UI/UX Review Check",
    blogDesc:
      "Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.",
    blogDate: "10 Jan",
  },
  {
    blogImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    blogTitle: "UI/UX Review Check",
    blogDesc:
      "Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.",
    blogDate: "10 Jan",
  },
];

const Home = () => {
  return (
    <>
      <div className="flex justify-center h-[500px] items-center text-4xl">
        Hello! Welcome to the Blog Site
      </div>
      {blogData.map(Cards)}
      <div className="flex justify-center">
        <Button variant="text" className="flex items-center gap-2">
          Read More <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex justify-evenly gap-2 pt-20">
        {blogManCardData.map(BoxCards)}
      </div>
    </>
  );
};

export default Home;
