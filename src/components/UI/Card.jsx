import React from "react";
import Link from "next/link";
import Image from "next/image";
import {FiThumbsUp} from "react-icons/fi";
const Card = (props) => {
  return (
    <div className="group cursor-pointer rounded-lg transition-shadow duration-200 sm:m-2 sm:border sm:border-slate-400 sm:p-3 sm:shadow-md sm:hover:shadow-slate-400">
      <Link href={`/movie/${props.result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            props.result.backdrop_path || props.result.poster_path
          }`}
          width={500}
          height={300}
          className="transition-opacity duration-200 group-hover:opacity-80 sm:rounded-t-lg"
          style={{ maxWidth: "100%", maxHeight: "auto" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2">{props.result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {props.result.title || props.result.name}
          </h2>
          <p className="flex items-center">
            {props.result.release_date || props.result.first_air_date}
            <FiThumbsUp className="mr-1 ml-3 h-5" /> {props.result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
