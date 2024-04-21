export default function TemplateImage(props) {
  const imageclicked = () => {
    window.location.href = props.goto;
  };
  return (
    <>
      <div
        onClick={imageclicked}
        className="h-full rounded-lg w-full bg-gray-200"
      >
        <img src={props.src}></img>
      </div>
    </>
  );
}
