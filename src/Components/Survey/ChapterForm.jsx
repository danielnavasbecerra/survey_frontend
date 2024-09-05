import React, { useState } from "react";
import { Drawer } from "vaul";
import QuestionForm from "./QuestionForm";
import "../../App.css"

const ChapterForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      addChapter({ id: Date.now(), title, questions: [] });
      setTitle("");
    }
  };

  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button>Open Drawer</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Chapters.
              </Drawer.Title>
              <p className="text-gray-600 mb-2">
                Add a chapter title.
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter chapter title"
                />
                <button type="submit">Add Chapter</button>
              </form>
              <Drawer.NestedRoot>
                <Drawer.Trigger className="rounded-md mb-6 w-full bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                  Add Question
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 max-h-[94%] fixed bottom-0 left-0 right-0">
                    <div className="p-4 bg-white rounded-t-[10px] flex-1">
                      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
                      <div className="max-w-md mx-auto">
                        <Drawer.Title className="font-medium mb-4">
                          Questions.
                        </Drawer.Title>
                        <p className="text-gray-600 mb-2">
                          Write a{" "}
                          <span className="font-mono text-[15px] font-semibold">
                            `Question that you want`
                          </span>{" "}
                          add in your chapter.
                        </p>
                        <QuestionForm />
                      </div>
                    </div>
                    <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
                      <div className="flex gap-6 justify-end max-w-md mx-auto">
                        {/* <a
                          className="text-xs text-gray-600 flex items-center gap-0.25"
                          href="https://github.com/emilkowalski/vaul"
                          target="_blank"
                        >
                          GitHub
                        </a>
                        <a
                          className="text-xs text-gray-600 flex items-center gap-0.25"
                          href="https://twitter.com/emilkowalski_"
                          target="_blank"
                        >
                          Twitter
                        </a> */}
                      </div>
                    </div>
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.NestedRoot>
            </div>
          </div>
          <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto">
              {/* <a
                className="text-xs text-gray-600 flex items-center gap-0.25"
                href="https://github.com/emilkowalski/vaul"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="text-xs text-gray-600 flex items-center gap-0.25"
                href="https://twitter.com/emilkowalski_"
                target="_blank"
              >
                Twitter
              </a> */}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default ChapterForm;
