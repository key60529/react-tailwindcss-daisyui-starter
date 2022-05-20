export default function App() {
  return (
    <div className="container mx-auto px-3">
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=800&h=450"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <button className="btn btn-primary">A Primary Button</button>
        </div>
      </div>
    </div>
  );
}
