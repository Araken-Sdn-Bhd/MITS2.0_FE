export default function assessResults(wd_model, info, arr, name, max_score){
    var wd_score = 0;

    for (let x in wd_model){
        wd_score += wd_model[x];
    }

    var wd_avg_score = (((wd_score/max_score)*4)+1).toFixed(1);
    var wd_colour = '';
    var wd_level = '';

    if(wd_score >= info.data[arr[0]].range_min_value && wd_score < info.data[arr[0]].range_max_value+1){
    wd_level = info.data[arr[0]].range_label;
    wd_colour = '#CDEE4A';
    }
    else if(wd_score >= info.data[arr[1]].range_min_value && wd_score < info.data[arr[1]].range_max_value+1){
    wd_level = info.data[arr[1]].range_label;
    wd_colour = '#EEE84A';
    }
    else if(wd_score >= info.data[arr[2]].range_min_value && wd_score < info.data[arr[2]].range_max_value+1){
    wd_level = info.data[arr[2]].range_label;
    wd_colour = '#EED14A'
    }
    else if(wd_score >= info.data[arr[3]].range_min_value && wd_score < info.data[arr[3]].range_max_value+1){
    wd_level = info.data[arr[3]].range_label;
    wd_colour = '#EE9B4A'
    }
    else if(wd_score >= info.data[arr[4]].range_min_value && wd_score < info.data[arr[4]].range_max_value+1){
    wd_level = info.data[arr[4]].range_label;
    wd_colour = '#EE5D4A'
    }

    let WD_data = {
    score: wd_score,
    avg_score : wd_avg_score,
    colour : wd_colour,
    level : wd_level,
    ans : wd_model
    }
    sessionStorage.setItem("4_"+name, JSON.stringify(WD_data));
}