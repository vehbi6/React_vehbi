


function BlogList(props) {

    const list = props.list
    const x = props.x
    const deleteButton = props.deleteButton
    const handleDelete = (id) => {
        deleteButton(id);
    };
  return (
    <>
      <h2> { x } </h2>
      <table border="1" cellPadding="10">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          
          <th>Action</th>

        </tr>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>
              <button onClick={() => deleteButton(item.id)}>Delete</button>
              <button>Edit</button>
              <button>View</button>
            </td>
          </tr>
        ))}
      </table>

    </>
  )
}

export default BlogList