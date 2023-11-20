"use client";
import React, { useState } from "react";
import { MEALS } from "@/data/meals";
import { CATEGORIES } from "@/data/categories";
import Select from "react-select";
import Switch from "react-switch";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../../config";
import {
  ref,
  uploadString,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
const AddMeal = () => {
  const [title, setTitle] = useState();
  const [flag, setFlag] = useState();
  const [duration, setDuration] = useState();
  const [calories, setCalories] = useState();
  const [servings, setServings] = useState();
  const [ingredients, setIngredients] = useState(["", "", "", ""]);
  const [steps, setSteps] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const ingredientsDetails = [];
  const stepsDetails = [];

  const addNewIngInputFiels = () => {
    setIngredients([...ingredients, ""]);
  };
  const deleteIngredientsInputField = (index, e) => {
    e.preventDefault();
    const newArray = [...ingredients];
    newArray.splice(index, 1);
    setIngredients(newArray);
  };

  const addNewStepsInputFiels = () => {
    setSteps([...steps, ""]);
  };
  const deleteStepsInputField = (index, e) => {
    e.preventDefault();
    const newArray = [...steps];
    newArray.splice(index, 1);
    setSteps(newArray);
  };

  const handleIngredientInput = (event, index) => {
    let { value } = event.target;
    let onChangeValue = [...ingredients];
    onChangeValue[index] = value;
    setIngredients(onChangeValue);
  };
  const handleStepsInput = (event, index) => {
    let { value } = event.target;
    let onChangeValue = [...steps];
    onChangeValue[index] = value;
    setSteps(onChangeValue);
  };
  for (const [key, value] of Object.entries(ingredients)) {
    if (value !== "") {
      ingredientsDetails.push(`${value}`);
    }
  }
  for (const [key, value] of Object.entries(steps)) {
    if (value !== "") {
      stepsDetails.push(`${value}`);
    }
  }

  const [selectedOption, setSelectedOption] = useState(null);
  const categoryIds = [];

  for (let i in selectedOption) {
    categoryIds.push(selectedOption[i].value);
  }

  const options = [
    { value: "2dQKzEa7LSPXgFyVrkjn", label: "ايطاليانو" },
    { value: "AmSjdSajPJa3HmEfPwzx", label: "هلا بالخليج" },
    { value: "COszxRjARJTloZcwrgfn", label: "حلويات" },
    { value: "XgBInPRkghWvQE15YMdo", label: "مخبوزات" },
    { value: "ENyZxhcGdFqU2X3HktCF", label: "لحوم" },
    { value: "ZZX3WfnqmVUoExPorfzS", label: "مشويات" },
    { value: "FvWwsXNeP5Mo0xLzsYda", label: "مكسيكانو" },
    { value: "KZEg9C92LStgFop45z35", label: "هندوستاني" },
    { value: "RtndjQZeBum9smnJ7GPr", label: "صيني" },
    { value: "ZVSbniKIQHvquikUEN0K", label: "فرنساوي" },
    { value: "btpBDCR8uut6Jn6U9Bn9", label: "بحريات" },
    { value: "eFzh7O99tRefolKRduuN", label: "ياباني " },
    { value: "ecs6C8ha4tyzV1VLxMNn", label: "شوربات" },
    { value: "hb25pSDpegLubwQJV5Dl", label: "امريكاني" },
    { value: "hq2hQ0WYeebRvVXdnRgh", label: "كيتو" },
    { value: "j0ErklzXhrgHgJp3yN3R", label: "مصري" },
    { value: "l9hJvD13YoLD1wX5OwvD", label: "فطار او عشاء" },
    { value: "o1YsyvKbJUz3vTlyIjoH", label: "فراخ ودواجن" },
    { value: "qjAZ1VEaCtmVDCYTxUoT", label: "سلطات" },
    { value: "lV9U3eIFPBKpi5oS8mOw", label: "سندوتشات" },
    { value: "rWQfQOeHGoO1weF6Sdcp", label: "شامي" },
    { value: "vfiXYXaoRZCj9yquHipa", label: "نباتي" },
    { value: "prkRnZeDBVJ5S5RJFL2w", label: "صوصات" },
    { value: "0Qcm1H7v9Snpz98Zwwk3", label: "مشروبات" },
    { value: "bswiknaTh7dsrFavjWBT", label: "مقبلات" },
    { value: "PYkRMmhbJwleBQ7m9L1Z", label: "سناكس" },
  ];

  const [hasMeatCube, setHasMeatCube] = useState(false);
  const [hasGroundMeat, setHasGroundMeat] = useState(false);
  // const [hasKofta, setHasKofta] = useState(false);
  const [hasLiver, setHasLiver] = useState(false);
  const [hasSusage, setHasSusage] = useState(false);
  const [hasMeatShank, setHasMeatShank] = useState(false);
  const [hasEscalop, setHasEscalop] = useState(false);
  // const [hasMeatSteak, setHasMeatSteak] = useState(false);
  const [hasMeatFlito, setHasMeatFlito] = useState(false);
  const [hasMeatHeart, setHasMeatHeart] = useState(false);
  const [hasMeatKalawy, setHasMeatKalawy] = useState(false);
  const [hasMeatKirsha, setHasMeatKirsha] = useState(false);
  const [hasMeatKaware, setHasMeatKaware] = useState(false);
  const [hasMeatMombar, setHasMeatMombar] = useState(false);
  const [hasMeatHeadMeat, setHasMeatHeadMeat] = useState(false);
  const [hasMeatAkawy, setHasMeatAkawy] = useState(false);
  const [hasMeatBrain, setHasMeatBrain] = useState(false);
  const [hasCheckin, setHasCheckin] = useState(false);
  const [hasCheckinFillet, SetHasCheckinFillet] = useState(false);
  const [hasTurkey, setHasTurkey] = useState(false);
  const [hasKidney, setHasKidney] = useState(false);
  const [hasCheckinWings, setHasCheckinWings] = useState(false);
  const [hasCheckinLegs, setHasCheckinLegs] = useState(false);
  // const [hasShawrma, setHasShawrma] = useState(false);
  const [hasCheckinBreast, setHasCheckinBreast] = useState(false);
  // const [hasCheckinShish, setHasCheckinShish] = useState();
  const [hasFish, setHasFish] = useState(false);
  const [hasSeafood, setHasSeafood] = useState(false);
  const [hasCrabs, setHasCrabs] = useState(false);
  const [hasShrimp, setHasShrimp] = useState(false);
  const [hasFishFillet, setHasFishFillet] = useState(false);
  const [hasCalamari, setHasCalamari] = useState(false);
  const [hasLobester, setHasLobester] = useState(false);
  const [hasTuna, setHasTuna] = useState(false);
  const [hasRice, setHasRice] = useState(false);
  const [hasPasta, setHasPasta] = useState(false);
  const [hasFrik, setHasFrik] = useState(false);
  const [hasPotatos, setHasPotatos] = useState(false);
  const [hasEggplants, setHasEggplants] = useState(false);
  const [hasZucchini, setHasZucchini] = useState(false);
  const [hasPeas, setHasPeas] = useState(false);
  const [hasSpinach, setHasSpinach] = useState(false);
  const [hasCauliflower, setHasCauliflower] = useState(false);
  const [hasOcra, setHasOcra] = useState(false);
  const [hasMolokhia, setHasMolokhia] = useState(false);
  const [hasVegetarian, setHasVegetarian] = useState(false);
  // const [hasKeto, setHasKeto] = useState(false);
  const [hasDiet, setHasDiet] = useState(false);
  const [hasCabbage, setHasCabbage] = useState(false);
  const [hasBorccoli, setHasBorccoli] = useState(false);
  const [hasMashroom, setHasMashroom] = useState(false);
  const [hasNodels, setHasNodels] = useState(false);
  const [hasSherya, setHasSherya] = useState(false);
  const [hasLazanya, setHasLazanya] = useState(false);
  const [hasLessanAsfour, setHasLessanAsfour] = useState(false);
  const [hasOat, setHasOat] = useState(false);
  const [hasYellowLentils, setHasYellowLentils] = useState(false);
  const [hasBlackLentils, setHasBlackLentils] = useState(false);
  const [hasHomous, setHasHomous] = useState(false);
  const [hasWhiteBeans, setHasWhiteBeans] = useState(false);
  const [hasLobya, setHasLobya] = useState(false);
  const [hasCorn, setHasCorn] = useState(false);
  const [hasGreenBeans, setHasGreenBeans] = useState(false);
  const [hasCarots, setHasCarots] = useState(false);
  const [hasHotDogs, setHasHotDogs] = useState(false);
  const [hasBasmatiRice, setHasBasmatiRice] = useState(false);
  const [hasHamamAndSeman, setHasHamamAndSeman] = useState(false);
  const [hasFakhda, setHasFakhda] = useState(false);
  const [hasSalmon, setHasSalmon] = useState(false);
  const [hasKaviar, setHasKaviar] = useState(false);
  const [hasSweetPotato, setHasSweetPotato] = useState(false);
  const [hasRinga, setHasRinga] = useState(false);
  const [hasFesekh, setHasFesekh] = useState(false);
  const [hasBorghal, setHasBorghal] = useState(false);

  const [selectedFile, setSelectedFile] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = e.target.files;
    const selectedImagesArray = Array.from(selectedImages);
    selectedImagesArray.map((file, index) => {
      setSelectedFile((previousImages) => [
        ...previousImages,
        {
          id: index,
          src: URL.createObjectURL(file),
          blob: file,
        },
      ]);
    });
  };
  const uploadImages = async () => {
    const uploadedImages = [];
    for (let i in selectedFile) {
      const mealsImageRef = ref(
        storage,
        `AllMeals/${title}/${title}` + " " + i
      );
      await uploadBytes(mealsImageRef, selectedFile[i].blob).then(
        async (snapShot) => {
          const imagesToUpload = await getDownloadURL(mealsImageRef);
          uploadedImages.push(imagesToUpload);
        }
      );
    }
    return uploadedImages;
  };

  const AddMeal = async (e) => {
    setLoading(true);
    e.preventDefault();
    const imageUrl = await uploadImages();
    await addDoc(collection(db, "AllMeals"), {
      title,
      flag,
      duration,
      calories,
      servings,
      categoryIds,
      imageUrl,
      ingredients: ingredientsDetails,
      steps: stepsDetails,
      timestamp: serverTimestamp(),
      hasMeatCube,
      hasGroundMeat,
      hasTurkey,
      // hasKofta,
      hasLiver,
      hasSusage,
      hasMeatShank,
      // hasMeatSteak,
      hasEscalop,
      hasMeatFlito,
      hasMeatHeart,
      hasMeatKalawy,
      hasMeatKirsha,
      hasMeatKaware,
      hasMeatMombar,
      hasMeatHeadMeat,
      hasMeatAkawy,
      hasMeatBrain,
      hasCheckin,
      hasCheckinFillet,
      hasKidney,
      hasCheckinWings,
      hasCheckinLegs,
      // hasShawrma,
      hasCheckinBreast,
      // hasCheckinShish,
      hasFish,
      hasSeafood,
      hasCrabs,
      hasShrimp,
      hasFishFillet,
      hasCalamari,
      hasLobester,
      hasTuna,
      hasRice,
      hasPasta,
      hasFrik,
      hasPotatos,
      hasEggplants,
      hasZucchini,
      hasPeas,
      hasSpinach,
      hasCauliflower,
      hasOcra,
      hasMolokhia,
      hasVegetarian,
      // hasKeto,
      hasDiet,
      hasCabbage,
      hasBorccoli,
      hasMashroom,
      hasNodels,
      hasSherya,
      hasLazanya,
      hasLessanAsfour,
      hasOat,
      hasYellowLentils,
      hasBlackLentils,
      hasHomous,
      hasWhiteBeans,
      hasLobya,
      hasCorn,
      hasGreenBeans,
      hasCarots,
      hasHotDogs,
      hasBasmatiRice,
      hasHamamAndSeman,
      hasFakhda,
      hasSalmon,
      hasSalmon,
      hasKaviar,
      hasSweetPotato,
      hasRinga,
      hasFesekh,
      hasBorghal,
    });

    // reset all states again
    setTitle("");
    setFlag("");
    setDuration("");
    setCalories("");
    setServings("");
    setSelectedFile([]);
    setIngredients(["", "", "", ""]);
    setSteps(["", "", "", ""]);
    setSelectedOption("");
    setHasMeatCube(false);
    setHasGroundMeat(false);
    setHasTurkey(false);
    // setHasKofta(false)
    setHasLiver(false);
    setHasSusage(false);
    setHasMeatShank(false);
    // setHasMeatSteak(false)
    setHasEscalop(false);
    setHasMeatFlito(false);
    setHasMeatHeart(false);
    setHasMeatKalawy(false);
    setHasMeatKirsha(false);
    setHasMeatKaware(false);
    setHasMeatMombar(false);
    setHasMeatHeadMeat(false);
    setHasMeatAkawy(false);
    setHasMeatBrain(false);
    setHasCheckin(false);
    SetHasCheckinFillet(false);
    setHasKidney(false);
    setHasCheckinWings(false);
    setHasCheckinLegs(false);
    // setHasShawrma(false)
    setHasCheckinBreast(false);
    // setHasCheckinShish(false)
    setHasFish(false);
    setHasSeafood(false);
    setHasCrabs(false);
    setHasShrimp(false);
    setHasFishFillet(false);
    setHasCalamari(false);
    setHasLobester(false);
    setHasTuna(false);
    setHasRice(false);
    setHasPasta(false);
    setHasFrik(false);
    setHasPotatos(false);
    setHasEggplants(false);
    setHasZucchini(false);
    setHasPeas(false);
    setHasSpinach(false);
    setHasCauliflower(false);
    setHasOcra(false);
    setHasMolokhia(false);
    setHasVegetarian(false);
    // setHasKeto(false)
    setHasDiet(false);
    setHasCabbage(false);
    setHasBorccoli(false);
    setHasMashroom(false);
    setHasNodels(false);
    setHasSherya(false);
    setHasLazanya(false);
    setHasLessanAsfour(false);
    setHasOat(false);
    setHasYellowLentils(false);
    setHasBlackLentils(false);
    setHasHomous(false);
    setHasWhiteBeans(false);
    setHasLobya(false);
    setHasCorn(false);
    setHasGreenBeans(false);
    setHasCarots(false);
    setHasHotDogs(false);
    setHasBasmatiRice(false);
    setHasHamamAndSeman(false);
    setHasFakhda(false);
    setHasSalmon(false);
    setHasSalmon(false);
    setHasKaviar(false);
    setHasSweetPotato(false);
    setHasRinga(false);
    setHasFesekh(false);
    setHasBorghal(false);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="bg-white w-full h-screen  flex items-center justify-center">
        <img className="w-40" src="/loading.gif" alt="loading" />
      </div>
    );
  }
  return (
    <div className="m-10 bg-white shadow-2xl pb-10 flex flex-col w-[80%] border-solid border-2 rounded-xl mx-auto">
      {/* upload images */}
      <div className="mx-auto mt-10 h-60 mb-10">
        <div className="flex  justify-center items-center mx-4">
          {selectedFile &&
            selectedFile.map((item, index) => {
              return (
                <div className="text-center pb-5">
                  <img
                    className="w-48 mx-1 rounded-md max-w-[200px] h-48 max-h-[200px] "
                    src={item.src}
                    alt="useruploadedfile"
                  />
                  <RiDeleteBin6Line
                    className="hover:text-red-900 text-lg cursor-pointer mx-auto mt-2"
                    onClick={() =>
                      setSelectedFile(selectedFile.filter((e) => e !== item))
                    }
                  />
                </div>
              );
            })}
        </div>
        <div className="mt-4 flex justify-center items-center mx-auto">
          <input multiple onChange={handleImageChange} type="file" />
          <button
            className="bg-blue-900 text-white p-2 text-center rounded-lg"
            onClick={uploadImages}
          >
            حمل الصور
          </button>
        </div>
      </div>
      <form className="mt-10" action="">
        {/* meal details section */}
        <section className="flex flex-col justify-end items-end mx-6">
          {/* title */}
          <div className="flex  mb-6">
            <div className="">
              <input
                className="border-2 px-2 py-2 w-96 rounded-lg mx-2"
                style={{ direction: "rtl", minWidth: 400 }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="title"
              />
            </div>
            <div className="flex justify-end items-center px-2 w-40">
              <label htmlFor="title">أسم الأكلة</label>
            </div>
          </div>
        </section>
        {/* flag */}
        <section className="flex flex-col justify-end items-end mx-6">
          <div className="flex  mb-6">
            <div className="">
              <input
                className="border-2 px-2 py-2 w-96 rounded-lg mx-2"
                style={{ direction: "rtl", minWidth: 400 }}
                value={flag}
                onChange={(e) => setFlag(e.target.value)}
                type="text"
                maxLength={2}
                name="flag"
              />
            </div>
            <div className="flex justify-end items-center px-2 w-40">
              <label htmlFor="flag">رمز البلد</label>
            </div>
          </div>
        </section>
        {/* duration */}
        <section className="flex flex-col justify-end items-end mx-6">
          <div className="flex  mb-6">
            <div className="">
              <input
                className="border-2 px-2 py-2 w-96 rounded-lg mx-2"
                style={{ direction: "rtl", minWidth: 400 }}
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                type="number"
                name="duration"
              />
            </div>
            <div className="flex justify-end items-center px-2 w-40">
              <label htmlFor="duration">وقت التحضير</label>
            </div>
          </div>
        </section>
        {/* calories */}
        <section className="flex flex-col justify-end items-end mx-6">
          <div className="flex  mb-6">
            <div className="">
              <input
                className="border-2 px-2 py-2 w-96 rounded-lg mx-2"
                style={{ direction: "rtl", minWidth: 400 }}
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                type="number"
                name="calories"
              />
            </div>
            <div className="flex justify-end items-center px-2 w-40">
              <label htmlFor="calories">السعرات الحرارية</label>
            </div>
          </div>
        </section>
        {/* servings */}
        <section className="flex flex-col justify-end items-end mx-6">
          <div className="flex  mb-6">
            <div className="">
              <input
                className="border-2 px-2 py-2 w-96 rounded-lg mx-2"
                style={{ direction: "rtl", minWidth: 400 }}
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                type="number"
                name="servings"
              />
            </div>
            <div className="flex justify-end items-center px-2 w-40">
              <label htmlFor="servings">عدد الأفراد</label>
            </div>
          </div>
        </section>
        {/* ingredients */}
        <section className="flex flex-col justify-end items-end mx-6">
          <h4>المكونات</h4>

          <div className="mt-4">
            {ingredients.map((item, index) => {
              return (
                <div className="mb-2">
                  {ingredients.length > 1 && (
                    <button
                      className="text-2xl tex-red-900 p-6"
                      onClick={(e) => deleteIngredientsInputField(index, e)}
                    >
                      -
                    </button>
                  )}
                  {index === ingredients.length - 1 && (
                    <button
                      className="text-2xl"
                      onClick={() => addNewIngInputFiels()}
                    >
                      +
                    </button>
                  )}
                  <input
                    className="border-2 px-2 py-2 w-[750px] rounded-lg mx-2"
                    style={{ direction: "rtl", minWidth: 400 }}
                    type="text"
                    value={item}
                    onChange={(event) => handleIngredientInput(event, index)}
                  />
                </div>
              );
            })}
          </div>
        </section>
        {/* steps */}
        <section className="flex flex-col justify-end items-end mx-6">
          <h4>خطوات الطهي</h4>

          <div className="mt-4">
            {steps.map((item, index) => {
              return (
                <div className="mb-2">
                  {steps.length > 0 && (
                    <button
                      className="text-2xl tex-red-900 p-6"
                      onClick={(e) => deleteStepsInputField(index, e)}
                    >
                      -
                    </button>
                  )}
                  {index === steps.length - 1 && (
                    <button
                      className="text-2xl"
                      onClick={() => addNewStepsInputFiels()}
                    >
                      +
                    </button>
                  )}
                  <input
                    className="border-2 px-2 py-2 w-[750px] rounded-lg mx-2"
                    style={{ direction: "rtl", minWidth: 400 }}
                    type="text"
                    value={item}
                    onChange={(event) => handleStepsInput(event, index)}
                  />
                </div>
              );
            })}
          </div>
        </section>
        {/* categories */}
        {/* <section className="flex  justify-around ">
          {foundCats.map((item) => {
            return (
              <div className="mt-4">
                <button className=" bg-gray-200 p-2 px-4 text-center font-semibold rounded-lg">
                  {item.title}
                </button>
              </div>
            );
          })}
        </section> */}
        {/* categories options */}

        <section className="flex flex-col justify-end items-end mx-6">
          <div className="flex  mt-6 justify-center items-center">
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "grey" : "blue",
                }),
              }}
              className=""
              isMulti={true}
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
            <h3 className="ml-4">نوع الوصفة</h3>
          </div>
        </section>
        {/* add type */}

        <section className="mx-6 mt-6">
          <div className="grid grid-cols-10">
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2 text-center">مكعبات لحم</h3>
              <Switch
                onChange={(newValue) => setHasMeatCube(newValue)}
                checked={hasMeatCube}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">لحم مفروم</h3>
              <Switch
                onChange={(newValue) => setHasGroundMeat(newValue)}
                checked={hasGroundMeat}
              />
            </div>
            {/* <div>
          <h3 className="mb-2">كفتة </h3>
          <Switch
            onChange={(newValue) => setHasKofta(newValue)}
            checked={hasKofta}
          />
        </div> */}
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كبدة</h3>
              <Switch
                onChange={(newValue) => setHasLiver(newValue)}
                checked={hasLiver}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سجق</h3>
              <Switch
                onChange={(newValue) => setHasSusage(newValue)}
                checked={hasSusage}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">ريش</h3>
              <Switch
                onChange={(newValue) => setHasMeatShank(newValue)}
                checked={hasMeatShank}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سكالوب</h3>
              <Switch
                onChange={(newValue) => setHasEscalop(newValue)}
                checked={hasEscalop}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فخدة</h3>
              <Switch
                onChange={(newValue) => setHasFakhda(newValue)}
                checked={hasFakhda}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">عرق لحمة</h3>
              <Switch
                onChange={(newValue) => setHasMeatFlito(newValue)}
                checked={hasMeatFlito}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">قلوب</h3>
              <Switch
                onChange={(newValue) => setHasMeatHeart(newValue)}
                checked={hasMeatHeart}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كلاوي</h3>
              <Switch
                onChange={(newValue) => setHasMeatKalawy(newValue)}
                checked={hasMeatKalawy}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كرشة</h3>
              <Switch
                onChange={(newValue) => setHasMeatKirsha(newValue)}
                checked={hasMeatKirsha}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كوارع</h3>
              <Switch
                onChange={(newValue) => setHasMeatKaware(newValue)}
                checked={hasMeatKaware}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">ممبار</h3>
              <Switch
                onChange={(newValue) => setHasMeatMombar(newValue)}
                checked={hasMeatMombar}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">لحمة راس</h3>
              <Switch
                onChange={(newValue) => setHasMeatHeadMeat(newValue)}
                checked={hasMeatHeadMeat}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">عكاوي</h3>
              <Switch
                onChange={(newValue) => setHasMeatAkawy(newValue)}
                checked={hasMeatAkawy}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">مخ</h3>
              <Switch
                onChange={(newValue) => setHasMeatBrain(newValue)}
                checked={hasMeatBrain}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">هوت دوج</h3>
              <Switch
                onChange={(newValue) => setHasHotDogs(newValue)}
                checked={hasHotDogs}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فراخ</h3>
              <Switch
                onChange={(newValue) => setHasCheckin(newValue)}
                checked={hasCheckin}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فيليه فراخ</h3>
              <Switch
                onChange={(newValue) => SetHasCheckinFillet(newValue)}
                checked={hasCheckinFillet}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">رومي</h3>
              <Switch
                onChange={(newValue) => setHasTurkey(newValue)}
                checked={hasTurkey}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كبد وقوانص</h3>
              <Switch
                onChange={(newValue) => setHasKidney(newValue)}
                checked={hasKidney}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">اجنحة دجاج</h3>
              <Switch
                onChange={(newValue) => setHasCheckinWings(newValue)}
                checked={hasCheckinWings}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">وراك فراخ</h3>
              <Switch
                onChange={(newValue) => setHasCheckinLegs(newValue)}
                checked={hasCheckinLegs}
              />
            </div>
            {/* <div  className="mb-6">
          <h3 className="mb-2">شاورما</h3>
          <Switch
            onChange={(newValue) => setHasShawrma(newValue)}
            checked={hasShawrma}
          />
        </div> */}
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">صدور فراخ</h3>
              <Switch
                onChange={(newValue) => setHasCheckinBreast(newValue)}
                checked={hasCheckinBreast}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">حمام وسمان</h3>
              <Switch
                onChange={(newValue) => setHasHamamAndSeman(newValue)}
                checked={hasHamamAndSeman}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سمك</h3>
              <Switch
                onChange={(newValue) => setHasFish(newValue)}
                checked={hasFish}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سي فود</h3>
              <Switch
                onChange={(newValue) => setHasSeafood(newValue)}
                checked={hasSeafood}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كابوريا</h3>
              <Switch
                onChange={(newValue) => setHasCrabs(newValue)}
                checked={hasCrabs}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">جمبري</h3>
              <Switch
                onChange={(newValue) => setHasShrimp(newValue)}
                checked={hasShrimp}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سمك فيليه</h3>
              <Switch
                onChange={(newValue) => setHasFishFillet(newValue)}
                checked={hasFishFillet}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كاليماري</h3>
              <Switch
                onChange={(newValue) => setHasCalamari(newValue)}
                checked={hasCalamari}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">استاكوزا</h3>
              <Switch
                onChange={(newValue) => setHasLobester(newValue)}
                checked={hasLobester}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">تونة</h3>
              <Switch
                onChange={(newValue) => setHasTuna(newValue)}
                checked={hasTuna}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سلمون</h3>
              <Switch
                onChange={(newValue) => setHasSalmon(newValue)}
                checked={hasSalmon}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كفيار</h3>
              <Switch
                onChange={(newValue) => setHasKaviar(newValue)}
                checked={hasKaviar}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">رنجة</h3>
              <Switch
                onChange={(newValue) => setHasRinga(newValue)}
                checked={hasRinga}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فسيخ</h3>
              <Switch
                onChange={(newValue) => setHasFesekh(newValue)}
                checked={hasFesekh}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">ارز</h3>
              <Switch
                onChange={(newValue) => setHasRice(newValue)}
                checked={hasRice}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">ارز بسمتي</h3>
              <Switch
                onChange={(newValue) => setHasBasmatiRice(newValue)}
                checked={hasBasmatiRice}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">مكرونة</h3>
              <Switch
                onChange={(newValue) => setHasPasta(newValue)}
                checked={hasPasta}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">نودلز</h3>
              <Switch
                onChange={(newValue) => setHasNodels(newValue)}
                checked={hasNodels}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">شعرية</h3>
              <Switch
                onChange={(newValue) => setHasSherya(newValue)}
                checked={hasSherya}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">لازانيا</h3>
              <Switch
                onChange={(newValue) => setHasLazanya(newValue)}
                checked={hasLazanya}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">لسان عصفور</h3>
              <Switch
                onChange={(newValue) => setHasLessanAsfour(newValue)}
                checked={hasLessanAsfour}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">شوفان</h3>
              <Switch
                onChange={(newValue) => setHasOat(newValue)}
                checked={hasOat}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فريك</h3>
              <Switch
                onChange={(newValue) => setHasFrik(newValue)}
                checked={hasFrik}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">برغل</h3>
              <Switch
                onChange={(newValue) => setHasBorghal(newValue)}
                checked={hasBorghal}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بطاطس</h3>
              <Switch
                onChange={(newValue) => setHasPotatos(newValue)}
                checked={hasPotatos}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">عدس اصفر</h3>
              <Switch
                onChange={(newValue) => setHasYellowLentils(newValue)}
                checked={hasYellowLentils}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">عدس بحبة</h3>
              <Switch
                onChange={(newValue) => setHasBlackLentils(newValue)}
                checked={hasBlackLentils}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">حمص</h3>
              <Switch
                onChange={(newValue) => setHasHomous(newValue)}
                checked={hasHomous}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فاصوليا بيضاء</h3>
              <Switch
                onChange={(newValue) => setHasWhiteBeans(newValue)}
                checked={hasWhiteBeans}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">لوبيا</h3>
              <Switch
                onChange={(newValue) => setHasLobya(newValue)}
                checked={hasLobya}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بتنجان</h3>
              <Switch
                onChange={(newValue) => setHasEggplants(newValue)}
                checked={hasEggplants}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كوسة</h3>
              <Switch
                onChange={(newValue) => setHasZucchini(newValue)}
                checked={hasZucchini}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بسلة</h3>
              <Switch
                onChange={(newValue) => setHasPeas(newValue)}
                checked={hasPeas}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">سبانخ</h3>
              <Switch
                onChange={(newValue) => setHasSpinach(newValue)}
                checked={hasSpinach}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">قرنبيط</h3>
              <Switch
                onChange={(newValue) => setHasCauliflower(newValue)}
                checked={hasCauliflower}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بامية</h3>
              <Switch
                onChange={(newValue) => setHasOcra(newValue)}
                checked={hasOcra}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">ملوخية</h3>
              <Switch
                onChange={(newValue) => setHasMolokhia(newValue)}
                checked={hasMolokhia}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">نباتي</h3>
              <Switch
                onChange={(newValue) => setHasVegetarian(newValue)}
                checked={hasVegetarian}
              />
            </div>
            {/* <div  className="mb-6">
          <h3 className="mb-2">كيتو</h3>
          <Switch
            onChange={(newValue) => setHasKeto(newValue)}
            checked={hasKeto}
          />
        </div> */}
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">دايت</h3>
              <Switch
                onChange={(newValue) => setHasDiet(newValue)}
                checked={hasDiet}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">كرنب</h3>
              <Switch
                onChange={(newValue) => setHasCabbage(newValue)}
                checked={hasCabbage}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بروكلي</h3>
              <Switch
                onChange={(newValue) => setHasBorccoli(newValue)}
                checked={hasBorccoli}
              />
            </div>
            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">مشروم</h3>
              <Switch
                onChange={(newValue) => setHasMashroom(newValue)}
                checked={hasMashroom}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">ذرة</h3>
              <Switch
                onChange={(newValue) => setHasCorn(newValue)}
                checked={hasCorn}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">فاصوليا خضراء</h3>
              <Switch
                onChange={(newValue) => setHasGreenBeans(newValue)}
                checked={hasGreenBeans}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">جزر</h3>
              <Switch
                onChange={(newValue) => setHasCarots(newValue)}
                checked={hasCarots}
              />
            </div>

            <div className="flex flex-col justify-center items-center mb-4 px-2">
              <h3 className="mb-2">بطاطا</h3>
              <Switch
                onChange={(newValue) => setHasSweetPotato(newValue)}
                checked={hasSweetPotato}
              />
            </div>
          </div>
        </section>
        {/* update meal */}

        <section className="flex mt-10 justify-center items-center">
          <div className="flex justify-center items-center">
            <button
              className="bg-blue-400 rounded-lg px-6 py-4 hover:bg-blue-900 hover:text-gray-200 text-center text-white"
              onClick={AddMeal}
            >
              اضافة الوصفة
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddMeal;
