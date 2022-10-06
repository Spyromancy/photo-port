import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "../";

afterEach(cleanup);

const mockToggleModal = jest.fn();

const currentPhoto = {
  name: "Park bench",
  category: "landscape",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
  index: 1,
};

describe("Modal is rendering", () => {
  it("renders", () => {
    render(
      <Modal currentPhoto={currentPhoto} toggleModal={mockToggleModal}></Modal>
    );
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <Modal currentPhoto={currentPhoto} toggleModal={mockToggleModal} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Click Event", () => {
  it("calls toggleModal handler", () => {
    const { getByText } = render(
      <Modal toggleModal={mockToggleModal} currentPhoto={currentPhoto}></Modal>
    );
    fireEvent.click(getByText("Close this modal"));
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
