import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Book() {
  const [data, setdata] = useState([]);
  const [search, setSearch] = useState("");
  const userId = localStorage.getItem("id");
  const [likedList,setLikedList]=useState([]);
  const [dataStatus, setdataStatus] = useState(false);
  const key = "4dk8cAxWGoEsA3OAm1urJSyGJGLb2HMv";
//   const key = "ac367f2d-6b33-412b-ae5f-b76e4a897b4b"
  const apiUrl = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`;
  const navigate = useNavigate();

  const fetchingData = () => {
    axios
      .get(apiUrl)
      .then(function (response) {
        console.log(response.data.results.books);
        setdata(response.data.results.books);
        setdataStatus(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchingData();
    // getUserId();
  }, []);

  const searchValue = data.filter((ele) =>
    ele.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(userId);
  const getUserId = () => {
    axios
      .get(`https://6706f35ca0e04071d228c2a9.mockapi.io/login/${userId}`)
      .then(function (response) {
        console.log(response.data.fav);
        setLikedList(response.data.fav);
      })
      .catch(function (error) {
        console.log(error)
      });
  };

  const handleFav = (likeId) => {
    if(likedList.includes(likeId)){
        const nextList = [likeId,...likedList];
        console.log(nextList);
        setLikedList(nextList)
    }else{
        console.log('already there')
    }
  };

  return (
    <>
      <div className="bg-[#f0dac4]">
        <Navbar />
        <div className="bg-[#f0dac4]">
        {/* <div className={`bg-[#f0dac4] ${searchValue.length < 0 ? `h-screen`:''} `} > */}
        <div className="flex items-center justify-center mt-4 ">
          <input
            type="search"
            value={search}
            placeholder="Search by title"
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-xl w-[50vw] p-2 border 
        border-[#472d30] outline-none focus:ring-2 focus:ring-[#472d30] translation"
          />
        </div>
        <div className="flex justify-center items-center w-full pt-5">
          <div
            className="flex items-center gap-1 justify-start  flex-wrap w-[90%] max-md:justify-evenly
             max-md:w-[99%] max-sm:w-[99%] max-sm:justify-evenly"
          >
            {/* {!dataStatus && 
               <h1>fetching data... </h1>
            } */}
            {/* {dataStatus &&  */}
            {searchValue.length > 0 ? (
              searchValue.map((item, index) => {
                return (
                  <Link
                    key={index}
                    // to={userId? (`/singleBook/${item.title}`):(`/book/`)}
                    to={`/singleBook/${item.title}`}
                    className="flex flex-col items-center justify-center rounded-xl
                     bg-[#d4a373] w-[32%] p-4 hover:ring-2 hover:ring-[#472d30]
                     max-md:w-[48%]  max-sm:w-full"
                  >
                    <div className="h-30 w-[50%] mb-3 max-sm:w-[30%]">
                      <img
                        src={item.book_image}
                        alt="book image"
                        className="h-full w-full"
                      />
                    </div>
                    <h1 className="text-black font-bold ">
                      Author:{" "}
                      <span className="text-[#faedcd]">{item.author}</span>
                    </h1>
                    <h1 className="text-black font-bold ">
                      Title:{" "}
                      <span className="text-[#faedcd]"> {item.title} </span>{" "}
                    </h1>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <button >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          //   fill="white"
                          className="h-7 hover:bg-slate-200"
                        >
                          <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                        </svg>
                      </button>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          className="h-7 hover:bg-slate-200"
                        >
                          <path d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z" />
                        </svg>
                      </button>
                    </div>

                    {/* </div> */}
                  </Link>
                );
              })
            ) : (
              <h1 className="flex items-center justify-center">No such Book</h1>
            )}
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Book;
