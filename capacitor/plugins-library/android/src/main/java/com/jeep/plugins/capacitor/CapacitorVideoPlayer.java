package com.jeep.plugins.capacitor;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import java.io.File;

import android.content.pm.ApplicationInfo;
import android.util.Log;
import android.content.Intent;
import android.net.Uri;
import android.content.Context;

@NativePlugin(permissionRequestCode = CapacitorVideoPlayer.RequestCodes.Video)
public class CapacitorVideoPlayer extends Plugin {
    private static final String TAG = "CapacitorVideoPlayer";
    private Context context;
    private String videoPath;

    @PluginMethod()
    public void initPlayer(PluginCall call) {
        context = getContext();

        String mode = call.getString("mode");
        if(mode == null) {
            call.reject("VideoPlayer initPlayer: Must provide a Mode (fullscreen/embedded)");
            return;
        }
        String url = call.getString("url");
        if(url == null) {
            call.reject("VideoPlayer initPlayer: Must provide an url");
            return;
        }
        if (mode == "embedded") {
            call.reject("VideoPlayer initPlayer: Embedded Mode not yet implemented");
            return;
        }
        Log.v(TAG,"display url: "+url);
        String http = url.substring(0,4);
        if (http.equals("http")) {
            videoPath = url;
        } else {
            videoPath = "android.resource://" + context.getPackageName() + "/" + url; // works
            //            url = "content://"+appPath+ "/" + url ;
            Log.v(TAG,"calculated url: "+url);
        }
        Log.v(TAG,"videoPath: "+ videoPath);
        Uri uri = Uri.parse(videoPath);
        Log.v(TAG,"display uri: "+uri);
        Intent intent = new Intent(getActivity(), VideoPlayerActivity.class);
        intent.putExtra("videoUri",uri);
        startActivityForResult(call, intent, RequestCodes.Video);
        saveCall(call);
    }

    @Override
    protected void handleOnActivityResult(int requestCode, int resultCode, Intent data) {
        super.handleOnActivityResult(requestCode, resultCode, data);
        PluginCall savedCall = getSavedCall();

        if (savedCall == null) {
            return;
        }
        JSObject ret = new JSObject();
        if (requestCode == RequestCodes.Video) {
            ret.put("result", data.getBooleanExtra("result", false));
            savedCall.resolve(ret);
            return;
        }
        savedCall.reject("Plugin error");
    }

    public interface RequestCodes {
        int Video = 10001;
    }
}
