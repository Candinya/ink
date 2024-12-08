interface DateTagProps {
  date: string;
}
const DateTag = ({ date }: DateTagProps) => {
  const parsedDate = new Date(date);
  return (
    <span>
      {parsedDate.getFullYear()} 年 {parsedDate.getMonth() + 1} 月{" "}
      {parsedDate.getDate()} 日
    </span>
  );
};

export default DateTag;
