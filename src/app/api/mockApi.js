import { delay } from "../../app/common/util/util";
import { fakeData } from "./fakeData";

export const fetchFakeData = () => {
  return delay(1000).then(() => {
    return Promise.resolve(fakeData);
  });
};
