import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import fetchMock from "jest-fetch-mock";

//Serialized format
//@ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
//React Adapter
Enzyme.configure({ adapter: new Adapter() });

fetchMock.enableMocks();
