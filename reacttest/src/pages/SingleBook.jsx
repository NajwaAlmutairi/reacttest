import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function SingleBook() {
  const [data, setdata] = useState({});
  const [buyLinks, setBuyLinks] = useState([]);
  const key = "4dk8cAxWGoEsA3OAm1urJSyGJGLb2HMv";
  const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`;
  const navigate = useNavigate();
  let { title } = useParams();

  const fetchingData = () => {
    axios
      .get(apiUrl)
      .then(function (response) {
        console.log(response.data.results.books);
        const singlebook = response.data.results.books;
        const book = singlebook.filter((ele) => ele.title === title);
        console.log(book);
        setdata(book[0]);
        setBuyLinks(book[0].buy_links);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchingData();
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-center items-center w-full pt-5 bg-[#fed9b7] h-screen pb-3">
          <div className="flex items-center justify-evenly bg-[#d4a373] rounded-xl p-10 max-sm:flex-col">
            <div className="h-30 w-[50%] mb-3 ">
              <img
                src={data.book_image}
                alt="book image"
                className="h-full w-full "
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-black font-bold text-xl">
                Author: <span className="text-[#faedcd]">{data.author}</span>
              </h1>
              <h1 className="text-black font-bold text-xl ">
                Title: <span className="text-[#faedcd]"> {data.title} </span>{" "}
              </h1>
              {buyLinks.map((ele, index) => {
                return (
                  <Link to={ele.url}>
                    <button
                      key={index}
                      className="btn min-h-6 w-[20vw] bg-[#432818] text-white
                     hover:bg-[#673e27] 
                     max-sm:w-[40vw]"
                    >
                      {ele.name}
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SingleBook;
