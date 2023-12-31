import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField } from "../../redux/modules/post";
import TagBox from "../../components/post/TagBox";

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.post.tags);

  const onChangeTags = (nextTags) => {
    dispatch(
      changeField({
        key: "tags",
        value: nextTags,
      })
    );
  };
  return <TagBox onChangeTags={onChangeTags} tags={tags} />;
};

export default TagBoxContainer;
