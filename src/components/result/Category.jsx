const Category = ({title, description}) => {
    return ( <div className="flex flex-col gap-12 px-8 xl:flex-row xl:gap-19">
        <div>
            <p className="text-neutral-main font-light text-5xl leading-normal">{title.zh}</p>
            <p className="text-neutral-main text-2xl font-light leading-normal capitalize">{title.en}</p>
        </div>
        <p className="text-neutral-sub w-full max-w-112.5 pt-2.5 ">{description}</p>
        </div> );
}
 
export default Category;