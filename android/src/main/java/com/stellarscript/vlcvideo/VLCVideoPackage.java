package com.stellarscript.vlcvideo;

import android.app.Application;
import android.view.View;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import org.videolan.libvlc.LibVLC;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public final class VLCVideoPackage implements ReactPackage {

    private static final ArrayList<String> DEFAULT_VLC_OPTIONS = new ArrayList<>(Arrays.asList("-vvv", "--http-reconnect", "--http-caching=5000"));

    private View.OnKeyListener mOnKeyListener;
    private LibVLC mLibVLC;
    private VLCVideoCallbackManager mCallbackManager;

    @Override
    public List<NativeModule> createNativeModules(final ReactApplicationContext reactApplicationContext) {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(final ReactApplicationContext reactApplicationContext) {
        mLibVLC = new LibVLC(reactApplicationContext, DEFAULT_VLC_OPTIONS);
        mOnKeyListener = null;
        mCallbackManager = null;
        return Arrays.<ViewManager>asList(new VLCVideoViewManager(mOnKeyListener, mLibVLC, mCallbackManager));
    }

}
