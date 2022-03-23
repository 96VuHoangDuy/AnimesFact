
#example script create app distribute release
# yarn release android Production 1.0.1  or yarn release ios Production 1.0.1 

os_platform=$1
deployment=$2
target_version=$3;

android(){
     appcenter codepush release-react -a vuquyet808/MAEDA-ANDROID -d $deployment -t $target_version
}
ios(){
    appcenter codepush release-react -a vuquyet808/MAEDA-IOS -d $deployment -t $target_version
}

if [ $os_platform = android ]
then
   android
fi

if [ $os_platform = ios ]
then
  ios
fi



