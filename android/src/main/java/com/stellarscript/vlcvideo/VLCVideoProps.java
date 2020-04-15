package com.stellarscript.vlcvideo;

final class VLCVideoProps {

    static final String MEDIA_PROP = "media";
    static final String MEDIA_SOURCE_URL_PROP = "sourceUrl";
    static final String MEDIA_START_TIME_PROP = "startTime";
    static final int MEDIA_START_TIME_DEFAULT_VALUE = 0;
    static final String MEDIA_AUTOPLAY_PROP = "autoplay";
    static final boolean MEDIA_AUTOPLAY_DEFAULT_VALUE = true;
    static final String MEDIA_HW_DECODER_ENABLED_PROP = "hwDecoderEnabled";
    static final boolean MEDIA_HW_DECODER_ENABLED_DEFAULT_VALUE = true;
    static final String MEDIA_TITLE_PROP = "title";
    static final String MEDIA_TITLE_DEFAULT_VALUE = "";
    static final String KEY_CONTROL_ENABLED_PROP = "keyControlEnabled";
    static final boolean KEY_CONTROL_ENABLED_DEFAULT_VALUE = false;
    static final String PLAY_IN_BACKGROUND_PROP = "playInBackground";
    static final boolean PLAY_IN_BACKGROUND_DEFAULT_VALUE = false;
    static final String OPTIONS_PROP = "options";
    static final String[] OPTIONS_DEFAULT_VALUE = null;

    static final String PLAY_COMMAND_NAME = "play";
    static final int PLAY_COMMAND_ID = 1;
    static final String PAUSE_COMMAND_NAME = "pause";
    static final int PAUSE_COMMAND_ID = 2;
    static final String SEEK_COMMAND_NAME = "seek";
    static final int SEEK_COMMAND_ID = 3;
    static final int SEEK_COMMAND_TIME_ARGUMENT_INDEX = 0;

}
