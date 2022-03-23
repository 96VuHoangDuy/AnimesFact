import LoadingIndicator from 'Components/LoadingIndicator';
import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';

type FastImageLoaderProps = {
  loadingColor?: string;
  sizeLoading?: number | 'large' | 'small';
} & FastImageProps;

const FastImageLoader = (props: FastImageLoaderProps) => {
  const {loadingColor = 'white', sizeLoading = 'large', ...imageProps} = props;
  const [isImageLoad, setIsImageLoading] = useState(true);

  const onLoadImageEnd = useCallback(() => {
    setIsImageLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      <FastImage onLoadEnd={onLoadImageEnd} {...imageProps} />

      {isImageLoad && (
        <View style={styles.loadingView}>
          <LoadingIndicator color={loadingColor} size={sizeLoading} />
        </View>
      )}
    </View>
  );
};

export default memo(FastImageLoader);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingView: {position: 'absolute'},
});
