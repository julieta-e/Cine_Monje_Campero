"use client";

import { useEffect, useState } from "react";

const MOVIES = {
  Joker: { price: 10, img: "/img/Joker.jpg" },
  "Toy Story 4": { price: 15, img: "/img/Toy Story 4.png" },
  "The Lion King": { price: 13, img: "/img/The Lion King.webp" },
  Pocahontas: { price: 12, img: "/img/Pocahontas.jpg" },
  Titanic: { price: 12, img: "/img/Titanic.jpg" },
};

const generateSeats = () => {
  const rows = [];
  for (let i = 0; i < 5; i++) {
    const columns = [];
    for (let j = 0; j < 3; j++) {
      const seats = [];
      const seatCount = j === 1 ? 4 : 2;
      for (let k = 0; k < seatCount; k++) {
        seats.push("available");
      }
      columns.push(seats);
    }
    rows.push(columns);
  }
  return rows;
};

const Pantalla = () => {
  const [movie, setMovie] = useState("Joker");
  const [seatLayout, setSeatLayout] = useState<string[][][]>(generateSeats);
  const [selectedSeats, setSelectedSeats] = useState(0);

  useEffect(() => {
    const savedLayout = sessionStorage.getItem("seatLayout");
    const savedMovie = sessionStorage.getItem("selectedMovie");
    const savedSelected = sessionStorage.getItem("selectedSeats");

    if (savedLayout) setSeatLayout(JSON.parse(savedLayout));
    if (savedMovie) setMovie(savedMovie);
    if (savedSelected) setSelectedSeats(JSON.parse(savedSelected));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("seatLayout", JSON.stringify(seatLayout));
    sessionStorage.setItem("selectedMovie", movie);
    sessionStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [seatLayout, movie, selectedSeats]);

  const toggleSeat = (rowIdx: number, colIdx: number, seatIdx: number) => {
    setSeatLayout((prev) => {
      const newLayout = [...prev.map((row) => row.map((col) => [...col]))];
      const state = newLayout[rowIdx][colIdx][seatIdx];
      if (state === "occupied") return prev;

      if (state === "reserved") {
        newLayout[rowIdx][colIdx][seatIdx] = "available";
        setSelectedSeats((s) => s - 1);
      } else {
        newLayout[rowIdx][colIdx][seatIdx] = "reserved";
        setSelectedSeats((s) => s + 1);
      }
      return newLayout;
    });
  };

  const resetSeats = () => {
    setSeatLayout((prev) =>
      prev.map((row) =>
        row.map((col) =>
          col.map((seat) => (seat === "occupied" ? "occupied" : "available"))
        )
      )
    );
    setSelectedSeats(0);
  };

  const confirmSeats = () => {
    setSeatLayout((prev) =>
      prev.map((row) =>
        row.map((col) =>
          col.map((seat) => (seat === "reserved" ? "occupied" : seat))
        )
      )
    );
    setSelectedSeats(0);
  };

  const price = MOVIES[movie].price * selectedSeats;

  return (
    <div id="pantalla">
      <div className="cinema paradiso">
        <form className="movies_selector">
          <label htmlFor="movies">Pick a movie</label>
        </form>

        <ul className="reference">
          <li>
            <span className="seat_reference"></span>Available
          </li>
          <li>
            <span className="seat_reference reserved"></span>Reserved
          </li>
          <li>
            <span className="seat_reference occupied"></span>Occupied
          </li>
        </ul>

        <div id="screen" className="screen"></div>

        <div className="seats">
          {seatLayout.map((row, rowIdx) => (
            <div key={rowIdx} className="row">
              {row.map((column, colIdx) => (
                <div key={colIdx} className="column">
                  {column.map((state, seatIdx) => (
                    <div
                      key={seatIdx}
                      className={`seat ${state}`}
                      onClick={() => toggleSeat(rowIdx, colIdx, seatIdx)}
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="resume">
          You have selected{" "}
          <span id="selectedSeats" className="tickets">
            {selectedSeats}
          </span>{" "}
          seats for a total price of $
          <span id="price" className="tickets">
            {price}
          </span>
        </p>

        <button
          type="button"
          className="button reset btno-comprar"
          onClick={resetSeats}
        >
          Reset
        </button>
        <button type="button" className="button confirm" onClick={confirmSeats}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Pantalla;
