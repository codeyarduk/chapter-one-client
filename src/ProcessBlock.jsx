import React from "react";

class ProcessBlock extends React.Component {
  render() {
    const { altTag } = this.props;
    const { imgSrc } = this.props;
    const { title } = this.props;
    const { content } = this.props;

    return (
      <>
        <div className="flex flex-col pt-5 w-[336px] h-72 bg-chapterOneSuperLightBlue rounded-lg mt-4 items-center lg:w-[400px] mx-2 xl:w-[272px] xl:h-80">
          <img
            src={imgSrc}
            alt={altTag}
            className="self-center w-[67px] mt-7 lg:hidden"
          />
          <img
            src={imgSrc}
            alt={altTag}
            className="self-center w-[80px] mt-7 hidden lg:flex"
          />
          <p className="font-bold text-lg mt-8">{title}</p>
          <p className="font-light text-sm mt-1 w-72 xl:w-56 self-center text-center">
            {content}
          </p>
        </div>
      </>
    );
  }
}

export default ProcessBlock;
