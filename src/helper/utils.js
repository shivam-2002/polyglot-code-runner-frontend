import axios from "axios";

const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL || "";

export const executeCode = async (value, input, language) => {
  try {
    const res = await axios.post(BACKEND_BASE_URL + "/api/v1/execute-code", {
      code: value,
      inputVal: input,
      language: language,
    });
    if (res && res.data && res.data.status_code === 200) return res.data.data;
    else return res.data.error;
  } catch (error) {
    return error.toString();
  }
};

export const convertCode = async (
  sourceCode,
  targetLanguage,
  sourceLanguage
) => {
  try {
    const res = await axios.post(BACKEND_BASE_URL + "/api/v1/code-convert", {
      code: sourceCode,
      language: targetLanguage,
      source_language: sourceLanguage,
    });
    if (res && res.data) {
      return res.data.data;
    }
    return "";
  } catch (error) {
    return error.toString();
  }
};

export const getOptimizedCode = async (sourceCode, language) => {
  try {
    const res = await axios.post(BACKEND_BASE_URL + "/api/v1/code-optimize", {
      code: sourceCode,
      language,
    });
    if (res && res.data) {
      return res.data.data;
    }
    return "";
  } catch (error) {
    return error.toString();
  }
};

export const getSuggestions = async (sourceCode) => {
  try {
    const res = await axios.post(BACKEND_BASE_URL + "/api/v1/code-suggestion", {
      code: sourceCode,
    });
    if (res && res.data) {
      return res.data.data;
    }
    return "";
  } catch (error) {
    return error.toString();
  }
};
