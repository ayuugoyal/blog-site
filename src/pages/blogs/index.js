import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Cards from "../../components/Cards";
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

export default function Blogs() {
  const data = [
    {
      label: "All Blogs",
      value: "All Blogs",
      desc: blogManCardData.map(BoxCards),
    },
    {
      label: "Profile",
      value: "profile",
      desc: blogManCardData.map(BoxCards),
    },
    {
      label: "Life Based Blogs",
      value: "settings",
      desc: blogData.map(Cards),
    },
  ];
  return (
    <>
      <div className="flex justify-center mt-10">
        <Tabs value="dashboard">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                <div className="flex justify-start  gap-2">{label}</div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <div className="mt-10 mb-10 flex justify-start w-full">
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              </div>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
}
