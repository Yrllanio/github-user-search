import ContentLoader from "react-content-loader"

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={278}
    height={268}
    viewBox="0 0 400 460"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="19" y="66" rx="2" ry="2" width="320" height="300" /> 
    <rect x="23" y="380" rx="0" ry="0" width="155" height="48" />
  </ContentLoader>
)

export default ImageLoader