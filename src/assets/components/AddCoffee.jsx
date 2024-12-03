import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="w-11/12 m-auto">
      <form onSubmit={handleAddCoffee}>
        <div className=" bg-orange-200  p-5">
          <h1 className="text-center text-4xl font-bold mb-5">Add a Coffee</h1>

          {/* Form Row 1 Coffee Name & Available Quantity*/}
          <div className="md:flex mb-5 gap-5 justify-center">
            {/* Coffee Name */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Coffee Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Coffee Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Available Quantity */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Available Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Form Row 2  Supplier & Taste */}
          <div className="md:flex mb-5 gap-5 justify-center">
            {/* Supplier */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Supplier Name</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Taste */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Taste</span>
              </label>
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                className="input input-bordered w-full "
                required
              />
            </div>
          </div>

          {/* Form Row 3  Category & Details */}
          <div className="md:flex mb-5 gap-5 justify-center">
            {/* Category */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* Details */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Form row 4 Photo url */}
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* form row Submit */}
          <div className="mt-5 w-4/6  m-auto">
            <input
              type="submit"
              className="input bg-primary text-white input-bordered w-full"
              value="Add Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
