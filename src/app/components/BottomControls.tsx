interface BottomControlsProps {
  numberOfPeople: number;
  imageSize: number;
  setNumberOfPeople: (value: number) => void;
  setImageSize: (value: number) => void;
}

function BottomControls({
  numberOfPeople,
  imageSize,
  setNumberOfPeople,
  setImageSize,
}: BottomControlsProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full p-4 p-8">
      <div className="bg-slate-700 flex gap-4 justify-center p-4 rounded-full shadow-xl">
        <div className="flex flex-col items-center gap-2">
          <p>Number of people</p>
          <div className="py-2 px-4 border rounded-2xl flex gap-2">
            <p>{numberOfPeople}</p>

            <input
              type="range"
              min="1"
              max="1000"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p>Image size</p>
          <div className="py-2 px-4 border rounded-2xl flex gap-2">
            <p>{imageSize}</p>
            <input
              type="range"
              min="10"
              max="60"
              value={imageSize}
              onChange={(e) => setImageSize(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomControls;
