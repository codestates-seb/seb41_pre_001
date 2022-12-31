import styled from 'styled-components';

/**
 * Created by @ldk199662
 * @returns <Tag>
 */
export const Tag = ({ tags, setTags }) => {
  const removeTags = (indexToRemove) => {
    let filterd = tags.filter((el, index) => index !== indexToRemove);
    setTags(filterd);
  };

  const addTags = (event) => {
    let inputV = event.target.value;

    if (event.key === 'Enter' && !tags.includes(inputV) && inputV !== '') {
      setTags([...tags, inputV]);
      event.target.value = '';
    }
  };

  return (
    <>
      <TagsInput>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                role="presentation"
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
        <input
          className="tag-input"
          type="text"
          onKeyUp={(el) => addTags(el)}
          placeholder=""
        />
      </TagsInput>
    </>
  );
};

export const TagsInput = styled.div`
  margin: 10px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 20px;
  width: 480px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 3px;
  > ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 7px;
    background-color: #e1ecf4;
    border-radius: 3px;
    margin-top: 2px;
    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #39739d;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #39739d;
        border-radius: 50%;
        background-color: #e1ecf4;
        cursor: pointer;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    height: 35px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
      outline: transparent;
    }
  }

  &:focus-within {
    border-color: #aedafc;
    box-shadow: 0 0 0 4px hsla(206, 100%, 40%, 0.15);
    outline: 0;
  }
`;
