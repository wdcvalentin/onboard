import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { BiSearch } from 'react-icons/bi'
import { MdClear } from 'react-icons/md'
import CustomButton from "../Buttons/CustomButton";
import { useRouter } from 'next/router';

export const FormAddUser = ({ setOpen, onSubmit, teamMembers, companyId }) => {
  const router = useRouter();
  const [users, setUsers] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    background: "white",
    borderRadius: "5px",
    boxShadow: 24,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  useEffect(() => {
    const getUsers = async (email) => {
      try {
        const response = await fetch(`/api/user/users`)
        const data = await response.json()
        const result = data.filter((user) => !teamMembers.some(({ _id }) => user._id === _id))
        setUsers(result)
      } catch (error) {
        console.error(error)
      }
    }
    getUsers()
  }, [])

  const handleSelectedUser = async (user) => {
    const headers = {
      "Content-Type": "application/json"
    };
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        userId: user._id,
        companyId
      })
    };
    await fetch('/api/user/add-user-to-company', options)
    router.replace(router.asPath);
    setOpen(false);
  }

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = users.filter((value) => {
      return value.email.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const searchSuggestion = (value) => (
    <div onClick={async () => await handleSelectedUser(value)} key={value._id} className="dataItem">
      <p>{value.email}</p>
    </div>
  )

  async function onSubmitFormUser({ firstName, lastName, email, password }) {
    // await createUser(firstName, lastName, email, password);
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit(onSubmitFormUser)} style={style}>
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={'Search for a User'}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <BiSearch />
            ) : (
              <MdClear id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        <div className='dataResult'>
          {filteredData.length === 0 && users
            ?
            users.map(user => {
              return searchSuggestion(user)
            })
            :
            filteredData.slice(0, 15).map(value => {
              return searchSuggestion(value)
            })

          }
        </div>
      </div>

      <CustomButton br={20} bgcolor="blue" color="white" width={300}>
        Create User
      </CustomButton>
    </form>
  );
};
