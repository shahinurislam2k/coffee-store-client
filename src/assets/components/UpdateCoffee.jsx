import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const handleUpdateCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(updateCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee Update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  return (
    <div className="w-11/12 m-auto">
      <form onSubmit={handleUpdateCoffee}>
        <div className=" bg-orange-200  p-5">
          <h1 className="text-center text-4xl font-bold mb-5">Update Coffee</h1>

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
                defaultValue={name}
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
                defaultValue={quantity}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
              defaultValue={photo}
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

export default UpdateCoffee;
