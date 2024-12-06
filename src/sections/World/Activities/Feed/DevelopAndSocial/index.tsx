const DevelopAndSocial = () => {
  return (
    <>
      {/*桌面端样式，两条轴*/}
      <div className="hidden lg:grid grid-cols-2">
        {/*开发动态*/}

        {/*社交活动*/}
      </div>

      {/*移动端样式，合并轴*/}
      <div className="block lg:hidden">
        {/*开发动态与社交活动合并成一条轴*/}
      </div>
    </>
  );
};

export default DevelopAndSocial;
