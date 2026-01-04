interface Props {
  title: string;
}

export const CoverLayout = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-center h-[120px] md:h-[220px] bg-[url(/cover.png)] bg-cover bg-no-repeat">
      <h1 className="text-2xl md:text-4xl font-medium text-white uppercase text-center">
        {title}
      </h1>
    </div>
  );
};
