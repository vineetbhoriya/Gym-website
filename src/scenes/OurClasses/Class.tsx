type Props ={
    name:string,
    description ?:string
    image :string
}

 const Class =({name,description,image}:Props) => {
    const overlayStyle =`p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 opacity-0 text-center transition-500 hover:opacity-90 text-white`
    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <div className={overlayStyle}>
                <p className="text-2xl">{name}</p>
                <p className="mt-5">{description}</p>
            </div>
            <img src={image} alt={`${image}`} />
        </li>
    )
}


export default Class