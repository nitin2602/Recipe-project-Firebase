import { InformationCircleIcon } from "@heroicons/react/20/solid";

const SuccessMessage = () => (
  <div className="p-3 my-5 mx-auto rounded-lg text-center">
    <div className="flex justify-center items-center">
      <InformationCircleIcon className="w-5 h-5 mr-2 text-green-700 dark:text-green-200" />
      <h3 className="text-xl font-bold text-green-700 dark:text-green-200">
        Your account has been created!
      </h3>
    </div>
    <div className="my-3 font-semibold text-md text-green-700 dark:text-green-200">
      <p>
        Congratulations Chef! Your account has been created.
        <br />
        In 5 seconds you will be automatically logged in and redirected to the
        home page...
      </p>
    </div>
  </div>
);

export default SuccessMessage;
