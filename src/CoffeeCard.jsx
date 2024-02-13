import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
  const {_id, name, quantity, chef, supplier, taste, category, photo } = coffee;

  const handelDelete =(_id)=>{
    
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount >0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Coffee has been deleted.",
                    icon: "success"
                  });
                  const remaing = coffees.filter(cof=>cof._id !== _id);
                  setCoffees(remaing);
            }
        })
        }
      });
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-28 h-28" src={photo} />
        </figure>
        <div className="w-full pr-3 flex justify-between py-3">
          <div className="pl-3 mt-12">
            <h2 className="card-title">Name :{name}</h2>
            <p>Quantity :{quantity}</p>
            <p>Taste :{taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-6">
              <button className="btn  w-full">View</button>
              <Link to={`/updateCoffee/${_id}`} ><button className="btn w-full">Edit</button></Link>
              <button 
              onClick={()=>handelDelete(_id)}
              className="btn w-full">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
