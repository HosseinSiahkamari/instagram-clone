

const Story = ({avatar, username}) => {
    return ( <div className="px-2 w-32 h-32 ">
        <img className="rounded-full  overflow-x-scroll w-14 h-14 " src={avatar} alt="avatar" />
        <p className="truncate w-14">{username} </p>
    </div> );
}
 
export default Story;