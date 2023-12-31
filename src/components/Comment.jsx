import React from "react";

const Comment = () => {
  const commentData = [
    {
      name: "Bhushan",
      text: "Comment 2",
      replies: [],
    },
    {
      name: "Sourabh",
      text: "Comment 3",
      replies: [
        {
          name: "Abhishek",
          text: "Comment 1",
          replies: [
            {
              name: "manish",
              text: "Comment 2",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Bhushan",
      text: "Comment 4",
      replies: [],
    },
    {
      name: "Bhushan",
      text: "Comment 5",
      replies: [
        {
          name: "Bhushan",
          text: "Comment 6",
          replies: [],
        },
      ],
    },
  ];
  const CommentItem = ({ commentDetail }) => {
    return (
      <div className="p-2 m-2 bg-slate-200">
        {commentDetail.name} : {commentDetail.text}
      </div>
    );
  };
  const CommentList = ({ list }) => {
    return (
      <>
        {list.map((detail, index) => {
          return (
            <div key={index}>
              <CommentItem commentDetail={detail} />
              {detail.replies && detail.replies.length > 0 && (
                <div className="p-1 ml-7 border-l-2 border-black">
                  <CommentList list={detail.replies} />
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="w-1/2">
      <CommentList list={commentData} />
    </div>
  );
};

export default Comment;
