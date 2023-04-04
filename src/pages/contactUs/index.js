import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";

export default function Example() {
  return (
    <div className="flex justify-center m-20">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Contact Us
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your Message for us.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <div className="w-96">
              <Textarea label="Message" />
            </div>
          </div>
          <Button className="mt-6" fullWidth>
            Send
          </Button>
        </form>
      </Card>
    </div>
  );
}
