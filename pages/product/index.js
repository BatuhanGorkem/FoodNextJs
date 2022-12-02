import Image from "next/image";

const index = () => {
  return (
    <div className="flex flex-row items-center h-screen px-20 gap-10">
      <div className="basis-1/2 ">
        <Image
          className="rounded-lg"
          src="/images/64 - N87odiI.jpg"
          width={600}
          height={600}
          alt="img"
        ></Image>
      </div>
      <div className="basis-1/2">
        <h1>Good Pizza</h1>
        <span>$10</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          maiores labore neque ipsam rem quidem nostrum dolore quod nisi
          architecto.
        </p>
        <form className="flex gap-4 text-sm">
          <div className="flex items-center">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> Ketçap</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2"> Mayonez</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
