function SectionTitle({
    title,
    subtitle,
    subtitle_class,
    title_class,
    additional_class
  }: {
    title?: string;
    subtitle?: string;
    subtitle_class?: string;
    title_class?: string;
    additional_class?:string
  }) {
    return (
      <div className={additional_class}>
        <div className="">
          <p className={`text-xl max-sm:!text-lg font-bold font-[poppins] ${title_class}`}>{title}</p>
        </div>
        <div className="">
          <p className={`${subtitle_class} !text-sm`}>{subtitle}</p>
        </div>
      </div>
    );
  }
  
  export default SectionTitle;
  