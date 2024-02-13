import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const loadCoffee = useLoaderData()
    const {
        name,
        _id,
        quantity,
        chef,
        supplier,
        taste,
        category,
        photo,
        details
      }= loadCoffee;
    const handelUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const details = form.details.value;
        const updateCoff = {
          name,
          quantity,
          chef,
          supplier,
          taste,
          category,
          photo,
          details,
        };
        console.log(updateCoff);
        fetch(`http://localhost:5000/coffee/${_id}`,{
      method:'PUT',
      "headers":{
        "content-type":"application/json"
      },
      body:JSON.stringify(updateCoff)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'success',
          text: 'Do you want to Update ',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        
      }else{
        Swal.fire({
          title: 'error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    })

        
      };
      return (
        <div className="max-w-screen-2xl flex md:flex-col items-center justify-center  gap-16 bg-stone-300 p-4">
          <h2 className="text-6xl font-bold">Update Coffee</h2>
          <p className="text-sm w-4/5">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here.
          </p>
          <form onSubmit={handelUpdateCoffee}>
            <div className="flex gap-8">
              <div>
                <label className="text-xs font-bold mb-5">Name</label>
    
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="name"
                  defaultValue={name}
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <label className="text-xs font-bold"> Quantity</label>
                <input
                  type="text"
                  placeholder="quantity"
                  name="quantity"
                  defaultValue={quantity}
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div>
                <label className="text-xs font-bold">Chef</label>
                <input
                  type="text"
                  placeholder="Enter coffee chef"
                  name="chef"
                  defaultValue={chef}
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <label className="text-xs font-bold">Supplier</label>
                <input
                  type="text"
                  placeholder="Enter coffee supplier"
                  name="supplier"
                  defaultValue={supplier}
                  className="input input-bordered w-full "
                />
              </div>
            </div>
    
            <div className="flex gap-9">
              <div>
                <label className="text-xs font-bold">Taste</label>
                <input
                  type="text"
                  placeholder="Coffee Name"
                  name="taste"
                  defaultValue={taste}
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <label className="text-xs font-bold">Category</label>
                <input
                  type="text"
                  placeholder="Enter coffee category"
                  name="category"
                  defaultValue={category}
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <div className="flex gap-8">
              <div>
                <label className="text-xs font-bold">Photo</label>
                <input
                  type="text"
                  placeholder="Enter photo URL"
                  name="photo"
                  defaultValue={photo}
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <label className="text-xs font-bold">Details</label>
                <input
                  type="text"
                  placeholder="Enter coffee details"
                  name="details"
                  defaultValue={details}
                  className="input input-bordered w-full "
                />
              </div>
            </div>
    
            <input
              className="btn btn-active btn-neutral w-full  mt-8"
              type="submit"
              value="Add Coffee"
            />
          </form>
        </div>
      );
};

export default UpdateCoffee;