import { useState } from "react";

interface IPopUpProps {
  text: string;
  children: React.ReactNode;
}

const PopUp: React.FC<IPopUpProps> = ({ text, children }) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div>
      <div>
        <div>
          <button
            type="button"
            data-modal-toggle="popup"
            data-modal-target="popup"
            onClick={() => setShowChildren((prevValue) => !prevValue)}
          >
            {text}
          </button>
        </div>
      </div>
      {showChildren && (
        <div
          id="popup"
          tabIndex={-1}
          aria-hidden="true"
          className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
            !showChildren ? "hidden" : ""
          }`}
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white pt-10 rounded-lg shadow dark:bg-gray-700">
              <div>
                <button
                  type="button"
                  onClick={() => setShowChildren(false)}
                  className="absolute top-3 right-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <>{children}</>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { PopUp };