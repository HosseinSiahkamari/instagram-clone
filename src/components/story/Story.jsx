

const Story = ({ avatar, username }) => {
    return (
        <div className="flex flex-col justify-center items-center px-2 w-20 h-20">
            <img className="rounded-full  overflow-x-scroll w-14 h-14 " src={avatar} alt="avatar" />
            <p className="truncate w-14">{username} </p>
            <h1>kjbkbkkjbnbnkbh</h1>
        </div>
        );
}

export default Story;