import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  UIManager,
  requireNativeComponent,
  findNodeHandle,
} from "react-native";

class VLCVideo extends Component {
  constructor(props) {
    super(props);

    this.callbacks = {
      [RCTVLCVideoViewConstants.ON_SEEK_REQUESTED]: this._invokeEventCallback.bind(
        this,
        "onSeekRequested"
      ),
      [RCTVLCVideoViewConstants.ON_BUFFERING]: this._invokeEventCallback.bind(
        this,
        "onBuffering"
      ),
      [RCTVLCVideoViewConstants.ON_PLAYING]: this._invokeEventCallback.bind(
        this,
        "onPlaying"
      ),
      [RCTVLCVideoViewConstants.ON_PAUSED]: this._invokeEventCallback.bind(
        this,
        "onPaused"
      ),
      [RCTVLCVideoViewConstants.ON_END_REACHED]: this._invokeEventCallback.bind(
        this,
        "onEndReached"
      ),
      [RCTVLCVideoViewConstants.ON_ERROR]: this._invokeEventCallback.bind(
        this,
        "onError"
      ),
      [RCTVLCVideoViewConstants.ON_TIME_CHANGED]: this._invokeEventCallback.bind(
        this,
        "onTimeChanged"
      ),
      [RCTVLCVideoViewConstants.ON_SEEK_PERFORMED]: this._invokeEventCallback.bind(
        this,
        "onSeekPerformed"
      ),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.sourceUrl !== this.props.sourceUrl ||
      nextProps.keyControlEnabled !== this.props.keyControlEnabled ||
      nextProps.playInBackground !== this.props.playInBackground ||
      nextProps.style !== this.props.style
    );
  }

  _assignRoot = (root) => {
    this._root = root;
  };

  _getViewHandle = () => {
    return findNodeHandle(this._root);
  };

  _invokeEventCallback = (eventName, event) => {
    if (typeof this.props[eventName] === "function") {
      this.props[eventName](event.nativeEvent);
    }
  };

  seek = (time) => {
    if (typeof time !== "number" || isNaN(time) || time < 0) {
      time = 0;
    }

    UIManager.dispatchViewManagerCommand(
      this._getViewHandle(),
      UIManager.RCTVLCVideoView.Commands.seek,
      [time]
    );
  };

  play = () => {
    UIManager.dispatchViewManagerCommand(
      this._getViewHandle(),
      UIManager.RCTVLCVideoView.Commands.play,
      null
    );
  };

  pause = () => {
    UIManager.dispatchViewManagerCommand(
      this._getViewHandle(),
      UIManager.RCTVLCVideoView.Commands.pause,
      null
    );
  };

  render() {
    const media = {
      sourceUrl: this.props.sourceUrl,
      autoplay: this.props.autoplay,
      startTime: this.props.startTime,
      title: this.props.title,
      hwDecoderEnabled: this.props.hwDecoderEnabled,
      options: this.props.options,
    };

    return (
      <RCTVLCVideoView
        ref={this._assignRoot}
        style={this.props.style}
        keyControlEnabled={this.props.keyControlEnabled}
        playInBackground={this.props.playInBackground}
        media={media}
        {...this.callbacks}
      />
    );
  }
}

VLCVideo.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
  sourceUrl: PropTypes.string.isRequired,
  autoplay: PropTypes.bool.isRequired,
  startTime: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  hwDecoderEnabled: PropTypes.bool.isRequired,
  keyControlEnabled: PropTypes.bool.isRequired,
  playInBackground: PropTypes.bool.isRequired,
  options: PropTypes.array,
  onSeekRequested: PropTypes.func,
  onBuffering: PropTypes.func,
  onPlaying: PropTypes.func,
  onPaused: PropTypes.func,
  onEndReached: PropTypes.func,
  onError: PropTypes.func,
  onTimeChanged: PropTypes.func,
  onSeekPerformed: PropTypes.func,
};

VLCVideo.defaultProps = {
  autoplay: true,
  startTime: 0,
  title: "",
  hwDecoderEnabled: true,
  keyControlEnabled: false,
  playInBackground: false,
  options: null,
};

const RCTVLCVideoViewConstants = UIManager.RCTVLCVideoView.Constants;

const RCTVLCVideoViewInterface = {
  name: "VLCVideo",
  propTypes: {
    ...View.propTypes,
    media: PropTypes.object.isRequired,
    keyControlEnabled: PropTypes.bool.isRequired,
    playInBackground: PropTypes.bool.isRequired,
    [RCTVLCVideoViewConstants.ON_SEEK_REQUESTED]: PropTypes.func,
    [RCTVLCVideoViewConstants.ON_BUFFERING]: PropTypes.func,
    [RCTVLCVideoViewConstants.ON_PLAYING]: PropTypes.func,
    [RCTVLCVideoViewConstants.ON_PAUSED]: PropTypes.func,
    [RCTVLCVideoViewConstants.ON_END_REACHED]: PropTypes.func,
    [RCTVLCVideoViewConstants.ON_ERROR]: PropTypes.func,
    [RCTVLCVideoViewConstants.ON_TIME_CHANGED]: PropTypes.func,
    [RCTVLCVideoViewConstants.ON_SEEK_PERFORMED]: PropTypes.func,
  },
};

const RCTVLCVideoView = requireNativeComponent(
  "RCTVLCVideoView",
  RCTVLCVideoViewInterface,
  {
    nativeOnly: {
      media: true,
      keyControlEnabled: true,
      playInBackground: true,
    },
  }
);

export default VLCVideo;
